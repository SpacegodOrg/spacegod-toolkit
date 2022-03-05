import React from "react";
import { Svg } from "../../../components/Svg";
import { SvgProps } from "../../../components/Svg/types";
import Flex from "../../../components/Box/Flex";
import { LinkExternal } from "../../../components/Link/index";
import styled, { keyframes } from "styled-components";

interface LogoProps extends SvgProps {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const SpacegodLink = styled(LinkExternal)`
  display: flex;
  padding-left: 10px;
  align-items: center;
`;

const Logo: React.FC<LogoProps> = ({ isPushed, isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";

  return (
    <Flex>
        <Svg viewBox="0 0 2000 2829" {...props}>
            <image width="2000" height="2829" href='./Spacegod_Exchange_Logo-01.png' />
        </Svg>

        <SpacegodLink href="https://spacegod.org">Spacegod Home</SpacegodLink>

    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
