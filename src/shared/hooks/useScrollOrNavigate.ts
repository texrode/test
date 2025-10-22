import { useRouter } from "next/navigation";

export const useScrollOrNavigate = () => {
  const router = useRouter();

  const handleSectionClick = (id: string) => {
    const cleanId = id.replace("/#", "").replace("#", "");
    const el = document.getElementById(cleanId);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/#${cleanId}`);
    }
  };

  return handleSectionClick;
};
