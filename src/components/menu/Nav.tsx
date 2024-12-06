import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import Logo from "/logo-x.png";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* Navbar */}
      <Navbar maxWidth="full" className="h-16 p-5 bg-white/70">
        <NavbarBrand>
          <NavLink to="/">
            <img src={Logo} className="rounded-none h-20 py-5" alt="Main logo" />
          </NavLink>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            {/* Go Voting Button triggers the modal */}
            <Button
              className="px-4 lg:py-2 border-none font-medium text-black bg-[#ffffff] hover:text-black/50 duration-700"
              onPress={onOpen}
            >
              Go Voting
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent className="bg-black/50 text-white bg-opacity-80 backdrop-filter backdrop-blur-lg hover:bg-opacity-70 rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 "> </ModalHeader>
              <ModalBody>
                <h1 className="font-bold text-4xl ">Oops</h1>
                
 <p> It looks like we are still in the nomination phase! This means voting hasn’t started</p>
                <p>  We’re currently reviewing and finalizing the list of nominees. Once everything is ready, the voting phase will begin, and you’ll have the opportunity to support your favorite candidates. </p> 
                <p>We appreciate your patience and enthusiasm for this event. Stay tuned for further updates, and thank you for being a part of the process </p>
               
              </ModalBody>
              <ModalFooter>
                <Button  className=" p-5 bg-white  text-black rounded-full" variant="light" onPress={onClose}>
                  Close
                </Button>
              
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
