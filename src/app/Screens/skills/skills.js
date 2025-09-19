"use client";
import { Row, Col, Card, Typography, Button, Progress, Space } from 'antd';
import Link from 'next/link';
import { resources } from '../../../resources/datas/skills';
import { FaCode, FaCss3Alt, FaHtml5, FaJsSquare, FaPython } from 'react-icons/fa';
import Image from 'next/image';
// import {  } from "react-icons/fa";
const { Title, Text, Paragraph } = Typography;

function SkillsSection() {
    const displayedResources = resources.slice(0, 8);

    const skills = [
        { name: "C Programming", level: 85, icon: <FaCode size={20} color="#007acc" /> },
        { name: "HTML", level: 90, icon: <FaHtml5 size={20} color="#e34f26" /> },
        { name: "CSS", level: 80, icon: <FaCss3Alt size={20} color="#264de4" /> },
        { name: "JavaScript", level: 75, icon: <FaJsSquare size={20} color="#f7df1e" /> },
        { name: "Python", level: 88, icon: <FaPython size={20} color="#3776ab" /> },
    ];


    return (
        <section id="skills" style={{ margin: "4rem 0" }}>
            <Title level={2} style={{ color: "white", textAlign: "center", marginBottom: "2rem" }}>
                My Skills
            </Title>

            <Row gutter={[16, 16]}>
                {displayedResources.map((res, idx) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={idx}>
                        <a href={res.link} target="_blank" rel="noopener noreferrer">
                            <Card
                                hoverable
                                cover={
                                    <Image
                                        alt={res.title}
                                        src={res.image}
                                        style={{ height: 180, objectFit: "contain", padding: "1rem", background: "#1f2937" }}
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
                                <Paragraph style={{ color: "#d1d5db", height: "100px", overflow: "auto", scrollbarWidth: "2px" }}>{res.description}</Paragraph>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Link href="/skills">
                    <Button type="primary" size="large">View More</Button>
                </Link>
            </div>
        </section>
    );
}

export default SkillsSection;
