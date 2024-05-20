import React, { useMemo } from "react";

interface Props extends React.PropsWithChildren {
  id: "email" | "number";
  passId?: boolean;
}

const copyElementToClipboard = (id: "number" | "email") =>
  function () {
    if (!window) return;
    else {
      window.getSelection()?.removeAllRanges();
      let range = document.createRange();
      const el = document.getElementById(id);
      if (!el) return;
      range.selectNode(el);
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
      alert(
        `Copied the ${id}. Don't hesitate to reach out and we'll respond shortly.`
      );
    }
  };

export const CopyHeading: React.FC<Props> = ({
  children,
  id,
  passId = false,
}) => {
  const memoizedCallback = useMemo(() => copyElementToClipboard(id), [id]);
  return (
    <h3 onClick={memoizedCallback} id={passId ? undefined : id}>
      {children}
    </h3>
  );
};

export default CopyHeading;
