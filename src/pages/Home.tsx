import AuthTabs from "@/components/auth/AuthTabs"
import HeaderBanner from "@/components/Hero-section/HeaderBanner"
import HeaderModal from "@/components/Hero-section/HeaderModal"
import HeaderTips from "@/components/Hero-section/HeaderTips"

import { useSelector } from "react-redux"
import type { RootState } from "@/store"

function Home() {
  const modalStatus = useSelector((state: RootState) => state.modal.modalStatus)

  return (
    <div>
      <AuthTabs />
      <HeaderBanner />
      {modalStatus === "open" && <HeaderModal />}
      <HeaderTips />
    </div>
  )
}

export default Home