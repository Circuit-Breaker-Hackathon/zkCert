import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useUser } from "@/contexts/userContext";
import { Snippet } from "@nextui-org/snippet";

const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "indigo",
  "jade",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "umbrella",
  "violet",
  "watermelon",
  "xigua",
  "yellow",
  "zucchini",
  "azure",
  "beige",
  "coral",
  "denim",
  "emerald",
  "fuchsia",
  "gold",
  "ivory",
  "jade",
  "khaki",
  "lavender",
  "mustard",
  "navy",
  "olive",
  "peach",
  "quartz",
  "ruby",
  "sapphire",
  "turquoise",
  "umber",
  "vanilla",
  "wool",
  "xenon",
  "yarn",
  "zinc",
  "computer",
  "keyboard",
  "panda",
  "mouse",
  "hippo",
  "elephant",
  "america",
  "europe",
  "africa",
  "horse",
];
// Example words array
export default function VerifyModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [randomWord, setRandomWord] = useState("");
  const { isLoggedIn } = useUser();

  const generateRandomWord = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setRandomWord(word);
  };
  const redirectToVerify = () => {
    window.location.href = `/verify?randomWord=${randomWord}`;
  };
  return (
    <>
      {isLoggedIn && ( // Conditional rendering based on isLoggedIn
        <Button variant="shadow" color="secondary" onPress={onOpen}>
          Verify With ZkEmail
        </Button>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Verify your affiliation without exposing your Identity using
                zkEMAIL
              </ModalHeader>
              <ModalBody>
                <p>
                  <span className="font-semibold">How it Works:</span>
                  <br />
                  <span className="text-purple-600 font-semibold">1.</span>{" "}
                  Using the randomly generated word below send an email to
                  yourself from your email address.
                </p>
                <p>
                  <span className="text-purple-600 font-semibold">2.</span> Once
                  you have done this, click continue where you asked to upload
                  the email signature.
                </p>

                <Button
                  color="secondary"
                  variant="bordered"
                  onPress={generateRandomWord}
                >
                  Generate Random Word 🎲
                </Button>
                <Snippet size="lg">{randomWord}</Snippet>
              </ModalBody>

              <ModalFooter>
                <Button
                  color="primary"
                  className="mt-5"
                  onPress={redirectToVerify}
                >
                  Continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
