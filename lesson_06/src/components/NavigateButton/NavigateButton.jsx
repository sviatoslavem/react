import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const NavigateButton = ({
  title,
  path,
  variant = "outline",
  className = "",
}) => {
  const navigate = useNavigate();

  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => navigate(path)}
    >
      {title}
    </Button>
  );
};

export default NavigateButton;
