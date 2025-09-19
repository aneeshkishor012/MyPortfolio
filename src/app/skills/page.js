"use client";
import { Row, Col, Card, Typography, Progress } from 'antd';
import AnimatedBg from '../Screens/animatedBg/animatedBg';
import AppFooter from '../Screens/footer/footer';
import Navbar from '../Screens/navBar/navBar';
import { resources } from '../../resources/datas/skills';
import Image from 'next/image';
const { Title, Paragraph, Text } = Typography;

export default function SkillsPage() {
    const menuItems = [
        { key: "home", icon: "home", label: "Home", link: "/" }
    ];

    const data = resources;
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white relative overflow-hidden flex flex-col">
            <Navbar menuItems={menuItems} />
            {/* Animated background */}
            <AnimatedBg/>
            <section style={{ margin: "4rem 50px" }}>
                <Title level={2} style={{ color: "white", textAlign: "center", marginBottom: "2rem" }}>
                    My Skills
                </Title>

                <Row gutter={[16, 16]}>
                    {data.map((res, idx) => (
                        <Col xs={24} sm={12} md={8} lg={8} key={idx}>
                            <a href={res.link} target="_blank" rel="noopener noreferrer">
                                <Card
                                    hoverable
                                    cover={
                                        <Image
                                            alt={res.title}
                                            src={res.image}
                                            style={{ height: "200px", objectFit: "contain", padding: "1rem", background: "#1f2937" }}
                                        />
                                    }
                                    style={{ backgroundColor: "#111827", border: "1px solid #1f2937" }}
                                >
                                    <Title level={4} style={{ color: "white" }}>{res.title}</Title>

                                    {res?.level && <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <Progress
                                            percent={res?.level}
                                            strokeColor={{
                                                from: "#108ee9",
                                                to: "#87d068",
                                            }}
                                            showInfo={false}
                                            style={{ flex: 1 }} // makes progress take remaining space
                                        />
                                        <Text style={{ color: "#ccc", whiteSpace: "nowrap" }}>
                                            {res?.level}%
                                        </Text>
                                    </div>}
                                    <Paragraph style={{ color: "#d1d5db", overflow: "auto", height: "80px" }}>{res.description}</Paragraph>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </section>
            <AppFooter/>
        </div>
    );
}
