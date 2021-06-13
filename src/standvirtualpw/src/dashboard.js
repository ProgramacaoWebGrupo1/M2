import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Card,
    Container,
    Row,
    Col,
    Jumbotron
  } from "react-bootstrap";
  import ChartistGraph from "react-chartist";
  


export const Dashboard = () =>  {
    const [count, setCount] = useState(0);
    useEffect(() => {
        async function teste(){
            let response = await fetch('http://localhost:3000/carros/count');
            response = await response.json();
            setCount(response.count);
        }
        teste();
    },[]);


    const [contarCliente, setCounta] = useState(0);
    useEffect(() => {
        async function teste(){
            let response = await fetch('http://localhost:3000/clientes/count');
            response = await response.json();
            setCounta(response.count);
        }
        teste();
    },[]);

    const [contarFornecedor, setCountagem] = useState(0);
    useEffect(() => {
        async function teste(){
            let response = await fetch('http://localhost:3000/fornecedors/count');
            response = await response.json();
            setCountagem(response.count);
        }
        teste();
    },[]);
    


    
        

    return (
        <>
        <Jumbotron>
            <h2>Bem vindo ao painel de administração</h2>
            <p>Bem vindo ao painel de administração onde poderá ter uma visão mais interna da empresa como grafismos e a quantida de carros, clientes e fornecedores.</p>
        </Jumbotron>
          <Container fluid>
            <Row>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                    <Col xs="4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-light-3 text-success"></i>
                        </div>
                      </Col>
                      <Col xs="4">
                        <div className="numbers">
                          <p className="card-category">Qt. Carros</p>
                          <Card.Title as="h4">{count}</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="fas fa-redo mr-1"></i>
                      Atualizado
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-light-3 text-success"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Receita Mensal</p>
                          <Card.Title as="h4">100,345 €</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="far fa-calendar-alt mr-1"></i>
                      Ultimo mes
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-vector text-danger"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Qt. Clientes</p>
                          <Card.Title as="h4">{contarCliente}</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="far fa-clock-o mr-1"></i>
                      Inscritos
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-favourite-28 text-primary"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Fornecedores</p>
                          <Card.Title as="h4">{contarFornecedor}</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="fas fa-redo mr-1"></i>
                      Atualizado
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="mt-30" md="8">
                <Card >
                  <Card.Header>
                    <Card.Title as="h4">Comportamento de Utilizador</Card.Title>
                    <p className="card-category">24 Hours performance</p>
                  </Card.Header>
                  <Card.Body>
                    <div className="ct-chart" id="chartHours">
                      <ChartistGraph
                        data={{
                          labels: [
                            "9:00",
                            "12:00",
                            "15:00",
                            "18:00",
                            "21:00",
                            "00:00",
                            "3:00",
                            "6:00",
                          ],
                          series: [
                            [200, 385, 490, 600, 300, 210, 132, 50],
                          ],
                        }}
                        type="Line"
                        options={{
                          low: 0,
                          high: 800,
                          showArea: false,
                          height: "245px",
                          axisX: {
                            showGrid: false,
                          },
                          lineSmooth: true,
                          showLine: true,
                          showPoint: true,
                          fullWidth: true,
                          chartPadding: {
                            right: 50,
                          },
                        }}
                        responsiveOptions={[
                          [
                            "screen and (max-width: 640px)",
                            {
                              axisX: {
                                labelInterpolationFnc: function (value) {
                                  return value[0];
                                },
                              },
                            },
                          ],
                        ]}
                      />
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <div className="legend">
                      <i className="fas fa-circle text-info"></i>
                    </div>
                    <hr></hr>
                    <div className="stats">
                      <i className="fas fa-history"></i>
                      Atualizada à 3 minutos
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="8">
                <Card className="mt-20">
                  <Card.Header>
                    <Card.Title as="h4">Quantidade de carros</Card.Title>
                    <p className="card-category"></p>
                  </Card.Header>
                  <Card.Body>
                    <div className="ct-chart" id="chartActivity">
                      <ChartistGraph
                        data={{
                          labels: [
                            "Mercedes",
                            "BMW",
                            "Citrõen",
                            "Porsche",
                            "Fiat",
                            "Kia",
                            "Jaguar",
                            "Nissan",
                            "Seat",
                            "Tesla",
                            "Renault",
                            "Jeep",
                            "Cupra",
                            "Peugeot",
                            "Ford",
                            "Opel"
                          ],
                          series: [
                            [
                              4,
                              6,
                              3,
                              1,
                              1,
                              2,
                              1,
                              1,
                              3,
                              3,
                              1,
                              1,
                              0,
                              2,
                              3,
                              2
                            ],
                          ],
                        }}
                        type="Bar"
                        options={{
                          seriesBarDistance: 10,
                          axisX: {
                            showGrid: false,
                          },
                          height: "245px",
                        }}
                        responsiveOptions={[
                          [
                            "screen and (max-width: 640px)",
                            {
                              seriesBarDistance: 5,
                              axisX: {
                                labelInterpolationFnc: function (value) {
                                  return value[0];
                                },
                              },
                            },
                          ],
                        ]}
                      />
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <div className="legend">
                      <i className="fas fa-circle text-info"></i>
                       <i className="fas fa-circle text-danger"></i>
                      
                    </div>
                    <hr></hr>
                    <div className="stats">
                      <i className="fas fa-check"></i>
                      Informação certificada
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      );
    }


