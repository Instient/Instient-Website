'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"; // Import Checkbox

interface GetInTouchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetInTouch({ isOpen, onClose }: GetInTouchProps): JSX.Element {
  const [firstName, setFirstName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);  // For the combined checkbox (I'm not a robot + terms)

  // Check if all required fields and the checkbox are completed
  const isFormValid = firstName && message && country && isChecked;

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);  // Toggle the single checkbox
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full sm:w-[90%] md:w-[80%] max-w-lg py-5 h-[500px] font-ubuntu flex justify-center mt-10 sm:px-6 md:px-4">
        <div className="w-full space-y-6">
          <DialogHeader className="flex-row items-center justify-between space-x-4 px-3 mt-4">
            <DialogTitle className="text-lg font-medium">Get in touch</DialogTitle>
            <img src="/Instient Logo.svg" alt="Logo" className="w-16 h-16" />
          </DialogHeader>

          <div className="px-3">
            <form className="space-y-6">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="first-name"
                  placeholder="First Name *"
                  required
                  className="placeholder-black"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} // Handle input change
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger id="country" className="w-full border border-gray-300 p-2 rounded-md">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    {/* Add more countries here */}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Textarea
                  id="message"
                  placeholder="Message *"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-black"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} // Handle textarea change
                />
              </div>

              {/* Single checkbox for both "I'm not a robot" and terms */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms-robot" checked={isChecked} onCheckedChange={handleCheckboxChange} />
                <label
                  htmlFor="terms-robot"
                  className="text-xs gap-3 font-normal leading-none"
                >
                  I agree to Instient collecting and processing my personal data and confirm that I'm not a robot. 
                  For further information, please see
                  <a href="/privacy-notice" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    our Privacy Notice.
                  </a>
                </label>
              </div>
            </form>
          </div>

          <div className="flex justify-start px-3">
            <Button
              className="bg-white border-black text-black rounded-full border-[1.5px] flex items-center p-5 gap-2"
              disabled={!isFormValid} // Disable button if form is not valid
            >
              Submit <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
