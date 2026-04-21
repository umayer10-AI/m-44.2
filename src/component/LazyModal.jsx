"use client";
import dynamic from "next/dynamic";
import { createTask } from "@/lib/action";


const ModalTask = dynamic(() => import('@/component/ModalTask'), {
  loading: () => <p>Loading Modal...</p>,
  ssr: false,
});

const LazyModal = () => {
  return <ModalTask createTask={createTask} />;
};

export default LazyModal;