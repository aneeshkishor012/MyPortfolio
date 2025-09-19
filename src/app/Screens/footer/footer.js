"use client";
import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
    return (
        <Footer
            style={{
                background: "rgba(0, 0, 0, 0.19)",
                backdropFilter: "blur(8px)",
                padding: "24px 16px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "20px",
                }}
            >
                {/* Left Side - Personal Info */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Text style={{ color: "#d1d5db", fontSize: "16px" }}>
                        Aneesh Kishor K
                    </Text>
                    <Text style={{ color: "#d1d5db", fontSize: "14px" }}>
                        Hubli, Karnataka, India
                    </Text>
                    <Text style={{ color: "#d1d5db", fontSize: "14px" }}>
                        aneeshkishor012@gmail.com | +91 9605798400
                    </Text>
                </div>

                {/* Right Side - Social Links */}
                <div>
                    <Space direction="vertical" size="small">
                        <a
                            href="https://github.com/aneeshkishor012"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#d1d5db",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <FaGithub size={18} /> https://github.com/aneeshkishor012
                        </a>
                        <a
                            href="https://instagram.com/your-instagram-id"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#d1d5db",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <FaInstagram size={18} /> @your-instagram-id
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aneesh-kishor-k-88b040221/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#d1d5db",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <FaLinkedin size={18} /> https://www.linkedin.com/in/aneesh-kishor-k-88b040221/
                        </a>
                        <a
                            href="https://medium.com/@aneeshkishor012"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#d1d5db",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <FaMedium size={18} /> https://medium.com/@aneeshkishor012
                        </a>
                    </Space>
                </div>
            </div>

            <Row justify="center" style={{ marginTop: 20 }}>
                <Text style={{ color: "#9ca3af", fontSize: "medium" }}>
                    © {new Date().getFullYear()} Aneesh Kishor K. All rights reserved.
                </Text>
            </Row>
        </Footer>
    );
};

export default AppFooter;
