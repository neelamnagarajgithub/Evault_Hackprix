"use client";

import DocumentsSection from "@/app/_components/User/DocumentsSection";
import ProfileSection from "@/app/_components/User/ProfileSection";
import SettingsSection from "@/app/_components/User/SettingsSection";
import { useParams } from "next/navigation";
import NotFound from "../not-found";

export default function Page() {
  const params = useParams();

  switch (params.pagetype) {
    case "profile": {
      return <ProfileSection />;
      break;
    }
    case "documents": {
      return <DocumentsSection />;
      break;
    }
    case "settings": {
      return <SettingsSection />;
      break;
    }
    default: {
      return <NotFound />;
      break;
    }
  }
}
