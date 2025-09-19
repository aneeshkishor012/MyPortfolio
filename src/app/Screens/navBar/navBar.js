"use client";
import React, { useState } from "react";
import { Layout, Menu, Avatar, Tooltip } from "antd";
import "./styles.css";
import {
    FaHome,
    FaUser,
    FaStar,
    FaBriefcase,
    FaProjectDiagram,
    FaPhone
} from "react-icons/fa";
import AnimatedBg from "../animatedBg/animatedBg";

const { Header } = Layout;

const Navbar = ({ menuItems }) => {
    const [current, setCurrent] = useState("home");

    // Mapping keys to icons
    const iconMap = {
        home: <FaHome size={27} />,
        about: <FaUser size={27} />,
        skills: <FaStar size={27} />,
        experience: <FaBriefcase size={27} />,
        projects: <FaProjectDiagram size={27} />,
        contact: <FaPhone size={27} />
    };

    // Add icons + tooltip dynamically
    // Add icons + tooltip dynamically
    const menuWithTooltips = menuItems.map(item => ({
        key: item.key,
        label: (
            <Tooltip title={item.label} placement="bottom">
                <a
                    href={item.link}
                    style={{
                        color: "white",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        verticalAlign: "sub"
                    }}
                >
                    {iconMap[item?.icon] ?? item?.label}
                </a>
            </Tooltip>
        )
    }));


    return (
        <div>
            {/* Animated Background - only one instance */}
            <AnimatedBg />
            <Header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 24px",
                    backdropFilter: "blur(8px)",
                    zIndex: 1000,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
            >
                {/* Left: Avatar + Name */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Avatar
                        size={"large"}
                        src="https://weekday-user-pictures.s3.ap-south-1.amazonaws.com/profile-images/aneesh-kishor-k-88b040221.jpg"
                        style={{ backgroundColor: "#722ed1" }}
                    />
                    <span style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "bold" }}>
                        Aneesh Kishor K
                    </span>
                </div>

                {/* Right: Icon Menu */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[current]}
                    items={menuWithTooltips}
                    onClick={(e) => setCurrent(e.key)}
                    style={{
                        background: "transparent",
                        borderBottom: "none",
                        flex: 1,
                        justifyContent: "flex-end",
                        display: "flex",
                        gap: "20px",
                        borderRadius: "8px",
                        alignItems: "center",
                    }}
                />
            </Header>
        </div>
    );
};

export default Navbar;
