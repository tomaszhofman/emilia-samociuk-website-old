import React from 'react';
import { List, Section, Link, ListItem, StyledContainer, Title } from './ContactMe.styled';

const contactProviders = ['Email', 'LinkedIn', 'Behance'];

const ContactMe = () => {
  return (
    <Section>
      <StyledContainer>
        <Title>Lets’s connect</Title>
        <div>
          <List>
            {contactProviders.map(provider => {
              const index = provider + Math.random() * 3;
              return (
                <ListItem key={index}>
                  <Link href="">{provider}</Link>
                </ListItem>
              );
            })}
          </List>
        </div>
      </StyledContainer>
    </Section>
  );
};

export { ContactMe };
