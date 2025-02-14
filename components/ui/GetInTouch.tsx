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
  const [isChecked, setIsChecked] = React.useState(false);  // For the checkbox to verify "I'm not a robot"
  const [isTermsChecked, setIsTermsChecked] = React.useState(false); // For terms and conditions checkbox

  // Check if all required fields and checkboxes are completed
  const isFormValid = firstName && message && country && isChecked && isTermsChecked;

  const handleTermsChange = () => {
    setIsTermsChecked((prev) => !prev);
  };

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);  // Toggle isChecked (for "I'm not a robot")
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

              {/* Combined checkbox for terms and "I'm not a robot" */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms-robot" checked={isTermsChecked && isChecked} onCheckedChange={handleTermsChange} />
                <label
                  htmlFor="terms-robot"
                  className="text-xs gap-3 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <div className="space-y-1">
                    <p>
                      I agree to Instient collecting and processing my personal data to allow me to receive information on Instient services.
                      For further information, please see
                      <a href="/privacy-notice" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                        our Privacy Notice.
                      </a>
                    </p>
                    
                  </div>
                </label>
              </div>
            </form>
          </div>

          <div className="flex justify-start px-3">
            <Button
              className="bg-white text-black rounded-full border-[1.5px] flex items-center p-5 gap-2"
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
