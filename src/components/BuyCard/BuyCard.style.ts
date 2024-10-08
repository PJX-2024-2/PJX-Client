import styled from "styled-components";

export const BuyCardWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column',align: 'flex-start'})};
width: 34.3rem;
padding: 0 0.4rem;
gap: 1rem;
`;

export const BuyName = styled.div`
`;

export const BuyText = styled.div`
`;

export const BuyPicture = styled.div`
`;

export const BuyContent = styled.div`
`;