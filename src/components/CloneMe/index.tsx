import * as Styled from './styles';
export type CloneMeProps = {
  text?: string;
};

export function CloneMe({ text = 'change-me' }: CloneMeProps) {
  return (
    <Styled.Wrapper>
      <h1>{text}</h1>
    </Styled.Wrapper>
  );
}
