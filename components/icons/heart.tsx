const Heart = ({ size }: { size: string }) => {
    const styles = `stroke-inherit hover:stroke-inherit dark:stroke-inherit dark:hover:stroke-inherit ${size}`;
    return (
      <svg
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles}
      >
        <path
          d="M13 5C12.4673 4.39156 11.8649 3.69897 11 3.03884M11 3.03884C17.9491 -2.71789 24.3636 4.95775 19.0182 10.7145C18.1665 11.6317 15.2764 14.5523 12.6036 16.4712C11.5345 17.2388 10.2873 17.1109 9.39636 16.4712C7.79273 15.3518 3.75616 11.5484 2.98183 10.7145C-2.36361 4.95775 4.05092 -2.71789 11 3.03884Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default Heart;
  