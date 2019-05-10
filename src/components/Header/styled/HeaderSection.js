import styled from "styled-components"
import theme from "../../../theme"

const HeaderSection = styled.section`
  padding-top: 120px;
  display: flex;
  text-align: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: ${theme.headerHeight || "150px"};
  max-width: ${theme.sectionWidth};
  margin-left: auto;
  margin-right: auto;
`

export default HeaderSection
