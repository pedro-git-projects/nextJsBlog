import {Row, Col, Media, Image} from 'react-bootstrap'

const AuthorIntro = () => (
  <Row>
    <Col md="8">
      {/* AUTHOR INTRO STARTS */}
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://avatars3.githubusercontent.com/u/73723028?s=460&u=9aa4d0486ca8fc8fbec5d3e4f9769df488e96444&v=4"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello,</h5>
          <p className="welcome-text">
            My name is Pedro Pereira, logician and developer. I belive in open-source, functional and suckless software.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>
);

export default AuthorIntro