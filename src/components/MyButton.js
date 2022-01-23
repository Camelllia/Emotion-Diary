//버튼 공통 컴포넌트
const MyButton = ({type, text, onClick}) => {

    const btnTpye = ['positive', 'negative'].includes(type) ? type : "default"; 

    return (
        <button className={["MyButton", `MyButton_${btnTpye}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    );
};

MyButton.defaultProps = {
    type: "default",
};

export default MyButton;