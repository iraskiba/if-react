
import './App.css';
import {Contentbox} from "../Contentbox";
import {Title} from "../Title";
import {Sprite} from "../Sprite";
import {Form} from "../Form";
import {Wrapper} from "../Wrapper";
import {TopSection} from "../TopSection";

export const App = () => {
  return (
    <div>
      <>
        <Sprite/>
      </>
      <TopSection>
        <Wrapper>
          <Form/>
        </Wrapper>
      </TopSection>

      <Title/>
   <Contentbox/>
</div>
  );
}



