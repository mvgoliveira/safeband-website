import { BottomBoxShadow } from "@/components/bottomBoxShadow";
import { ExternalContainer, InternalContainer } from "@/components/grids/commons";
import { OverflowContainer } from "@/components/overflowContainer";
import { IGridColumnsContent, IReactChildren } from "@/interfaces/core";
import { Gutter } from "antd/lib/grid/row";
import { ReactElement } from "react";

import { Columns, Column } from "./styles";

function TwoColumns({
    children,
    margin = "0 0",
    padding = "20px",
    height = "max-content",
    overflow = true,
    backgroundSource = "default",
    backgroundContent = "black",
    backgroundBaseColor = "black",
    shadow = false,
    darkest = false,
    shadowHeight = "100%",
}: GridProps): ReactElement {
    return (
        <ExternalContainer
            margin={margin}
            height={height}
            overflow={overflow ? 1 : 0}
            backgroundSource={backgroundSource}
            backgroundContent={backgroundContent}
            backgroundBaseColor={backgroundBaseColor}
        >
            <InternalContainer padding={padding}>{children}</InternalContainer>

            {shadow && <BottomBoxShadow height={shadowHeight} />}

            {darkest && <OverflowContainer />}
        </ExternalContainer>
    );
}

interface IColumnsContentProps {
    $mobileContentDirection?: "normal" | "inverse";
    $mobileButtonSize?: "normal" | "full";
    gutter?: Gutter | [Gutter, Gutter];
}

const ColumnsContent = ({
    children,
    $mobileContentDirection = "normal",
    $mobileButtonSize = "normal",
    gutter = [50, 50],
}: IReactChildren & IColumnsContentProps) => (
    <Columns
        $mobileContentDirection={$mobileContentDirection}
        $mobileButtonSize={$mobileButtonSize}
        gutter={gutter}
    >
        {children}
    </Columns>
);
ColumnsContent.displayName = "ColumnsContent";
TwoColumns.ColumnsContent = ColumnsContent;

const LeftColumnContent = ({
    children,
    columns,
    columnsTablet,
    columnsMobile,
}: IGridColumnsContent) => (
    <Column sm={columnsMobile} lg={columns} md={columnsTablet}>
        {children}
    </Column>
);
LeftColumnContent.displayName = "LeftColumnContent";
TwoColumns.LeftColumnContent = LeftColumnContent;

const RightColumnContent = ({
    children,
    columns,
    columnsTablet,
    columnsMobile,
}: IGridColumnsContent) => (
    <Column sm={columnsMobile} lg={columns} md={columnsTablet}>
        {children}
    </Column>
);
RightColumnContent.displayName = "RightColumnContent";
TwoColumns.RightColumnContent = RightColumnContent;

export default TwoColumns;
