"use client";

import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Icon } from "@/shared/assets/icons/icons";
import { IconName } from "@/shared/assets/icons/types";
import axios from "axios";
import { api, configApi } from "@/shared/api/config";
import { Status } from "@/shared/types/status";
import ReCAPTCHA from "react-google-recaptcha";
import { Btn } from "@/shared/uikit";

interface FormData {
  name: string;
  telegram: string;
  phone: string;
  request: string;
}

const MAX_FILE_SIZE_MB = 5;

const inputs = [
  { name: "name", label: "Имя", placeholder: "Как к вам обращаться?" },
  { name: "phone", label: "Email", placeholder: "Куда вам можно написать?" },
  { name: "telegram", label: "Телеграм", placeholder: "Для связи с вами" },
  {
    name: "request",
    label: "О проекте",
    placeholder: "Расскажите о своём проекте",
  },
];

export const FormFeedback = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    telegram: "",
    phone: "",
    request: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;
    setError("");
    const validFiles = Array.from(selectedFiles).filter((file) => {
      const isValid = file.size <= MAX_FILE_SIZE_MB * 1024 * 1024;
      if (!isValid) setError("Размер файла больше 5 МБ");
      return isValid;
    });
    setFiles(validFiles.slice(0, 1));
  };

  const handleClick = () => fileInputRef.current?.click();
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.telegram.trim() ||
      !formData.request.trim()
    ) {
      setError("Все поля должны быть заполнены");
      return;
    }

    if (!agreementChecked) {
      setError("Подтвердите политику обработки персональных данных");
      return;
    }

    if (!recaptchaToken) {
      setError("Подтвердите что вы не робот");
      return;
    }

    setStatus("loading");

    try {
      await axios.post(`${configApi.url + api.checkCaptcha}`, {
        g_recaptcha_response: recaptchaToken,
      });

      const dataToSend = new FormData();
      const sendData = JSON.stringify({
        ...formData,
        fio: formData.name,
        user_request: formData.request,
      });
      dataToSend.append("message", sendData);

      if (files.length > 0) {
        dataToSend.append("upload_file", files[0]);
      }

      await axios.post(`${configApi.url + api.send}`, dataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setName(formData.name);
      setStatus("recieved");
    } catch {
      setStatus("rejected");
    }
  };

  return (
    <>
      {status !== "recieved" && (
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.top}>
            {inputs.map((field) => (
              <div className={styles.inputBlock} key={field.name}>
                <label className={styles.label}>{field.label}</label>
                <input
                  name={field.name}
                  value={formData[field.name as keyof FormData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={styles.input}
                />
              </div>
            ))}

            <div
              onClick={handleClick}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={styles.chooseFile}
            >
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => handleFiles(e.target.files)}
                accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
              />
              <div className={styles.left}>
                <p className={styles.label}>Загрузите файл</p>
                <div className={styles.info_block}>
                  <p className={styles.info_title}>
                    {files.length > 0 ? files[0].name : "Выберите файл"}
                  </p>
                  <p className={styles.info_subtitle}>
                    Размер до 5 МБ. Форматы JPG, JPEG, PNG, DOC, DOCX, PDF. Не
                    более 1 файла.
                    <br /> Выгружаемый файл должен быть хорошего качества и
                    отлично виден.
                  </p>
                </div>
              </div>
              <Icon name={IconName.Upload} />
            </div>

            <div className={styles.agreementCheckbox}>
              <input
                type="checkbox"
                id="agreement"
                checked={agreementChecked}
                onChange={(e) => {
                  setAgreementChecked(e.target.checked);
                  if (error) setError("");
                }}
                className={styles.checkboxInput}
              />
              <p className={styles.checkboxText}>
                Я согласен с условиями политики конфиденциальности
              </p>
            </div>

            <ReCAPTCHA
              sitekey="6LfNPVQrAAAAAGn6ItnRrCYfh98cQtwyTm1pg_Ad"
              onChange={(token) => {
                setRecaptchaToken(token ?? "");
                if (error) setError("");
              }}
            />
          </div>

          <div className={styles.bottom}>
            <Btn text="Начать проект" />
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </form>
      )}

      {status === "recieved" && (
        <div className={styles.successBlock}>
          <div className={styles.successText}>
            <h2 className={styles.successTitle}>
              {name}, ваша заявка отправлена!
            </h2>
            <p className={styles.successDescp}>
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <div className={styles.successSvg}>
            <Icon name={IconName.formTools} />
          </div>
        </div>
      )}
    </>
  );
};
