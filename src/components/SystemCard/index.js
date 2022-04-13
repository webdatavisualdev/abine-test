import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";
import LoginIcon from "@mui/icons-material/Login";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import styles from "./style.module.css";

function SystemCard({ title, description, creationDate, members, cardIndex }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickAdd = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={styles.SystemCard}>
      <CardContent className={styles.SystemCardContent}>
        <div className={styles.IndexButtonContainer}>
          <IconButton className={styles.BtnIcon}>{cardIndex}</IconButton>
        </div>
        <div className={styles.IconButtonsContainer}>
          <IconButton className={styles.BtnIcon}>
            <LoginIcon />
          </IconButton>
          <IconButton className={styles.BtnIcon}>
            <EditIcon />
          </IconButton>
          <IconButton className={styles.BtnIcon}>
            <ArrowDownwardIcon />
          </IconButton>
        </div>
        <Typography
          className={styles.SystemCardTitle}
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography
          color="text.secondary"
          textAlign="center"
          className={styles.SystemCardDescription}
          gutterBottom
        >
          {description} <span>{creationDate}</span>. It has{" "}
          <span>{members} members</span>.
        </Typography>
        <Button
          variant="text"
          className={styles.BtnAdd}
          id="btn-add"
          aria-controls={open ? "add-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickAdd}
        >
          Add <AddIcon />
        </Button>
        <Menu
          id="add-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "btn-add",
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText>Organization</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <GrainOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Department</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <GroupWorkIcon />
            </ListItemIcon>
            <ListItemText>Group</ListItemText>
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  );
}

export default SystemCard;
