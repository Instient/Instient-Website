"use client";

import * as React from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface ApplyJobProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function ApplyJobModal({ isOpen, onClose, jobTitle }: ApplyJobProps): JSX.Element {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");
  const [resume, setResume] = React.useState<File | null>(null);
  const [coverLetter, setCoverLetter] = React.useState<File | null>(null);
  const [agreeTerms, setAgreeTerms] = React.useState(false);
  const [newsletter, setNewsletter] = React.useState(false);
  const [referralSource, setReferralSource] = React.useState("");

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setResume(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"] },
    multiple: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;

    console.log({ firstName, lastName, email, phone, linkedin, resume, coverLetter, referralSource });
    onClose();
  };

  return (
<Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="w-full sm:w-[90%] md:w-[60%] max-w-xl py-5 font-ubuntu max-h-[90vh] overflow-y-auto">
            <DialogHeader className="flex-row items-center justify-between space-x-4 px-3 mt-4">
            <DialogTitle className="text-lg font-medium">Join us</DialogTitle>
            <img src="/Instient Logo.svg" alt="Logo" className="w-16 h-16" />
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 px-3">
            <div className="flex flex-row space-x-4">
                <div className="w-1/2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input 
                    id="firstName" 
                    placeholder="First Name" 
                    required 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                />
                </div>

                <div className="w-1/2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input 
                    id="lastName" 
                    placeholder="Last Name" 
                    required 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                />
                </div>
            </div>

            <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <Label htmlFor="phone">Mobile Phone *</Label>
                <Input id="phone" type="tel" placeholder="Mobile Phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div>
                <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                <Input id="linkedin" type="url" placeholder="LinkedIn Profile URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            </div>

            <div className="flex flex-row space-x-4">
                <div className="w-1/2">
                <Label>Resume Upload</Label>
                <div {...getRootProps()} className="border-dashed border-2 p-4 text-center cursor-pointer">
                    <input {...getInputProps()} />
                    {resume ? <p>{resume.name}</p> : <p className="text-sm">Drag & drop your resume here, or click to upload</p>}
                </div>
                </div>

                <div className="w-1/2">
                <Label>Cover Letter Upload</Label>
                <div {...getRootProps()} className="border-dashed border-2 p-4 text-center cursor-pointer">
                    <input {...getInputProps()} />
                    {coverLetter ? <p>{coverLetter.name}</p> : <p className="text-sm">Drag & drop your letter here, or click to upload</p>}
                </div>
                </div>
            </div>

            <div>
                <Label htmlFor="referralSource">Where did you hear about us?</Label>
                <Select value={referralSource} onValueChange={setReferralSource}>
                <SelectTrigger id="referralSource" className="w-full border border-gray-300 p-2 rounded-md">
                    <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="job_board">Job Board</SelectItem>
                    <SelectItem value="referral">Employee Referral</SelectItem>
                    <SelectItem value="social_media">Social Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectContent>
                </Select>
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox id="agreeTerms" checked={agreeTerms} onCheckedChange={setAgreeTerms} />
                <Label htmlFor="agreeTerms" className="cursor-pointer">I agree to the terms and conditions</Label>
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" checked={newsletter} onCheckedChange={setNewsletter} />
                <Label htmlFor="newsletter" className="cursor-pointer">Subscribe to job updates</Label>
            </div>

            <div className="flex justify-start">
                <Button className="bg-white border-black text-black rounded-full border-[1.5px] flex items-center p-5 gap-2" disabled={!agreeTerms}>
                Submit <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
            </form>
        </DialogContent>
        </Dialog>

  );
}
