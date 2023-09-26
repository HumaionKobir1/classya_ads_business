import Container from "../Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropDown";
import NavbarItems from "./NavbarItems";

const Navber = () => {
    return (
        <div className="absolute w-full bg-opacity-50 bg-black text-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <Logo></Logo>
                        <NavbarItems></NavbarItems>

                        <div className="flex gap-3">
                        <button className="bg-[#30e3ca] md:block hidden text-white hover:bg-blue-600 px-4 py-2 rounded-md">
                            + Post an Ad
                        </button>
                        <MenuDropdown></MenuDropdown>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navber;