"use client";
import { motion } from "framer-motion";

export default function ConfirmModal({ open, onCancel, onConfirm, fileName }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-999">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-secondary p-6 rounded-2xl w-[320px] shadow-lg"
      >
        <h3 className="text-xl font-semibold text-white mb-2">Ananda says</h3>
        <p className="opacity-80 mb-6">
          Want To Downlad my CV ?{" "}
          <span className="text-accent">{fileName}</span> ?
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-700 rounded-xl hover:bg-gray-600"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-accent rounded-xl hover:bg-accent-hover"
          >
            Yes
          </button>
        </div>
      </motion.div>
    </div>
  );
}
