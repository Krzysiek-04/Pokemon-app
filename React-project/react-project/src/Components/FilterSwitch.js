import {
  Switch,
  FromLabel,
  FromControl,
  FromControlLabel,
  FormGroup,
} from "@material-ui/core";
import { styled } from "styled-components";

const SwitchContainer = styled.div`
  bottom: 0;
  right: 0;
`;
const FilterSwitch = ({ handleFilterSwit, switchChecked }) => {
  return (
    <SwitchContainer>
      <FromControl component="filedset">
        <FormGroup>
          <FromControlLabel
            control={
              <Switch checked={switchChecked} onChange={handleFilterSwit} />
            }
          />
        </FormGroup>
      </FromControl>
      <FromLabel component="legend">A-Z</FromLabel>
    </SwitchContainer>
  );
};
export default FilterSwitch;
