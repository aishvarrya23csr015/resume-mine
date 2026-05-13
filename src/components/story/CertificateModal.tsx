import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    description: "Certification demonstrating proficiency in MongoDB database development and design patterns",
    image: "/AISHVARRYV MONGODB.png",
  },
  {
    title: "Java SE 17 Developer",
    issuer: "Oracle",
    description: "Certification validating expertise in Java 17 programming and application development",
    image: "/JAVA SE17 AISHVARRYA.png",
  },
];

interface CertificateModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  certificateIndex: number;
}

export function CertificateModal({
  isOpen,
  onOpenChange,
  certificateIndex,
}: CertificateModalProps) {
  const certificate = certificates[certificateIndex];

  if (!certificate) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{certificate.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <p className="text-cyan-400 font-semibold">{certificate.issuer}</p>
            <p className="text-foreground/70 mt-2">{certificate.description}</p>
          </div>
          <div className="flex justify-center">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { certificates };
