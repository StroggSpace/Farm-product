import React from "react";

function App() {
  return (
    <>
      <PageWrapper>
        <Header>
          <Logo />
          <Nav>
            <Button />
          </Nav>
        </Header>
        <MainPage>
          <About>
            <Title />
          </About>
          <ComparisonList>
            <ComparisonItem />
            <ComparisonItem />
            <ComparisonItem />
            <ComparisonItem />
            <Button />
          </ComparisonList>
        </MainPage>
        <Footer>
          <Logo />
        </Footer>
      </PageWrapper>
    </>
  );
}

export default App;
