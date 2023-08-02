import Heart from "../icons/heart";

const Footer = () => {
  const supportPopStyles = `hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md py-1 px-3 inline-block cursor-pointer text-gray-400 hover:text-pink-400 dark:text-gray-400 dark:hover:text-pink-300 stroke-gray-400 hover:stroke-pink-400 dark:stroke-gray-400 dark:hover:stroke-pink-300`;
  return (
    <footer className="bg-[#f3f3f330] my-10 rounded-md p-[1rem]">
      <div className={supportPopStyles}>
        <p className="flex items-center gap-[5px]">
          <Heart size="w-4 h-4" /> Support
        </p>
      </div>
    </footer>
  );
};

export default Footer;
