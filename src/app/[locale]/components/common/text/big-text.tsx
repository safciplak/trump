export const BigText = (props: any) => {
  return (
    <div className={"relative " + props.customWrapper}>
      <p
        className={
          "text-3xl text-white relative leading-snug select-none " +
          props.customClass
        }
      >
        {props.text}
      </p>
      {props.extra}
    </div>
  );
};
