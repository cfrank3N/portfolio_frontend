import { Container, Image } from "react-bootstrap";

export default function MyFooter() {
  return (
    <footer className="py-4 mt-5">
      <Container className="container">
        <hr />
        <div className="d-flex justify-content-between mt-4 text-secondary">
          <a href="/contact" className="text-secondary">Contact me</a>
          <a href="/" className="text-secondary">Home</a>
          <div>
            <a className="mx-3" href="https://github.com/cfrank3N">
            
                <Image width={25} src="/github-mark-white.svg"></Image>
            </a>
            <a href="https://www.linkedin.com/in/adam-frank-5226961b6/">
            
                <Image width={25} src="/linkedin-mark-white.svg"></Image>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
