'use client';

import * as React from 'react';

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuIcon,
  Toolbar,
  Typography,
  LaptopIcon,
  DashboardCustomizeIcon,
  FormatListBulletedIcon,
} from '@/modules/components/mui';
import { useWindow } from '@/modules/hooks';

const drawerWidth = 240;

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { getWindow } = useWindow();
  const drawerContainer = getWindow()?.document.body;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderListItem = ({
    title,
    href,
    icon,
  }: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }) => {
    return (
      <ListItem key={title} disablePadding>
        <ListItemButton href={href}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    );
  };

  const renderDrawer = () => {
    return (
      <div>
        <Toolbar />
        <Divider />
        <List>
          {renderListItem({
            title: 'Top',
            href: '/admin/',
            icon: <LaptopIcon />,
          })}
        </List>
        <Divider />
        <List>
          {renderListItem({
            title: 'Thread summaries',
            href: '/admin/thread-summaries/',
            icon: <FormatListBulletedIcon />,
          })}
        </List>
        <List>
          {renderListItem({
            title: 'Create summary',
            href: '/admin/thread-summaries/new',
            icon: <DashboardCustomizeIcon />,
          })}
        </List>
      </div>
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Shota admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={drawerContainer}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {renderDrawer()}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {renderDrawer()}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
