import LoginandProfile from "../LoginandProfile";
export default function NavElements() {
  // const isopen = useSelector((state: RootState) => state.user.showMenu);
  // const dispatch = useDispatch();

  // function handleMenu() {
  //   console.log(isopen);
  //   dispatch(toggleMenu());
  // }
  return (
    <>
      <ul className="hidden text-black md:flex justify-between items-center text-center ">
        <w3m-button />
        <LoginandProfile />
      </ul>
      {/* <div className="md:hidden flex">
        <button
          className=" md:hidden justify-between items-center text-center text-2xl mr-4 text-white"
          onClick={handleMenu}
        >
          {isopen ? <VscChromeClose /> : <VscMenu />}
        </button>
      </div> */}
    </>
  );
}
