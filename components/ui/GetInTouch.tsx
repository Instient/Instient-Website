'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface GetInTouchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetInTouch({ isOpen, onClose }: GetInTouchProps): JSX.Element {
  const { toast } = useToast();
  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [positionLevel, setPositionLevel] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);

  const isFormValid = firstName && email && jobTitle && company && industry && positionLevel && message && isChecked;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      toast({ description: "Thank you! Our team will get in touch with you soon." });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full sm:w-[90%] md:w-[80%] max-w-lg py-5 font-ubuntu flex justify-center sm:px-6 md:px-4">
        <div className="w-full space-y-6">
          <DialogHeader className="flex-row items-center justify-between space-x-4 px-3 mt-4">
            <DialogTitle className="text-lg font-medium">Get in touch</DialogTitle>
            <img src="/Instient Logo.svg" alt="Logo" className="w-16 h-16" />
          </DialogHeader>

          <div className="px-3">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input placeholder="First Name *" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <Input type="email" placeholder="Email *" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder="Job Title *" required value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
              <Input type="tel" placeholder="Phone (Optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <Input placeholder="Company/Organization *" required value={company} onChange={(e) => setCompany(e.target.value)} />

              <Select value={industry} onValueChange={setIndustry}> 
                <SelectTrigger className="w-full border border-gray-300 p-2 rounded-md">
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                </SelectContent>
              </Select>

              <Select value={positionLevel} onValueChange={setPositionLevel}> 
                <SelectTrigger className="w-full border border-gray-300 p-2 rounded-md">
                  <SelectValue placeholder="Select Position Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                </SelectContent>
              </Select>

              <Textarea placeholder="Message *" required value={message} onChange={(e) => setMessage(e.target.value)} />

              <div className="flex items-center space-x-2">
                <Checkbox checked={isChecked} onCheckedChange={() => setIsChecked((prev) => !prev)} />
                <label className="text-xs font-normal leading-none">
                  I agree to Instient collecting and processing my personal data and confirm that I'm not a robot. For further information, please see
                  <a href="/privacy-notice" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> our Privacy Notice.</a>
                </label>
              </div>

              <div className="flex justify-start px-3">
                <Button type="submit" className="bg-white border-black text-black rounded-full border-[1.5px] flex items-center p-5 gap-2" >
                  Submit <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
