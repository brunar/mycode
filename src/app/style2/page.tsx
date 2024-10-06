// Component BOX
// Trim() is to cut last space (in the last box) like className="box "
function Box({
  className = "",
  style = {},
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{ fontStyle: "italic", ...style }}
      {...props}
    />
  );
}

const smallBox = (
  <Box className="box--small" style={{ backgroundColor: "lightblue" }}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box
    className="box--medium"
    style={{ fontStyle: "normal", backgroundColor: "pink" }}
  >
    medium pink box
  </Box>
);
const largeBox = (
  <Box className="box--large" style={{ backgroundColor: "orange" }}>
    large orange box
  </Box>
);
const sizelessColorlessBox = <Box>sizeless colorless box</Box>;

const PageStyle2 = () => {
  return (
    <>
      <div>
        {smallBox}
        {mediumBox}
        {largeBox}
        {sizelessColorlessBox}
      </div>

      <style>
        {`
            .box {
                border: 1px solid #333;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
            }
            .box--large {
                width: 270px;
                height: 270px;
            }
            .box--medium {
                width: 180px;
                height: 180px;
            }
            .box--small {
                width: 90px;
                height: 90px;
            }
        `}
      </style>
    </>
  );
};

export default PageStyle2;
