"use client";
import { Card, Row, Col, Typography } from 'antd';
import AnimatedBg from '../Screens/animatedBg/animatedBg';
import AppFooter from '../Screens/footer/footer';
import Navbar from '../Screens/navBar/navBar';
import { resources } from '../../resources/datas/learnings';

const { Title, Paragraph } = Typography;

function Learnings() {
    const menuItems = [
        { key: "home", icon: "home", label: "Home", link: "/" }
    ];
    const data = resources;

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white relative overflow-hidden flex flex-col">
            <Navbar menuItems={menuItems} />
            {/* Animated background */}
            <AnimatedBg />
            <section id="learnings" className="my-20">
                <Title level={2} style={{ color: "white", textAlign: "center", marginBottom: "2rem" }}>My Learnings</Title>
                <Row gutter={[16, 16]}>
                    {data.map((res, idx) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={idx}>
                            <a href={res.link} target="_blank" rel="noopener noreferrer">
                                <Card
                                    hoverable
                                    cover={<img alt={res.title} src={res.image} style={{ height: 180, objectFit: "contain", padding: "1rem", background: "#1f2937" }} />}
                                    style={{ backgroundColor: "#111827", border: "1px solid #1f2937" }}
                                >
                                    <Title level={4} style={{ color: "white" }}>{res.title}</Title>
                                    <Paragraph style={{ color: "#d1d5db" }}>{res.description}</Paragraph>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </section>
            <AppFooter />
        </div>
    );
}

export default Learnings;
