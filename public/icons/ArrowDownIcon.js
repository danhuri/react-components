const ArrowDownIcon = ({ fill, width, height, stroke }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height} 
            width={width} 
            fill={fill}
            stroke={stroke}
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
};

export default ArrowDownIcon;