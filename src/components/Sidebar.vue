<template>
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div class="app-header header-shadow">
            <div class="app-header__logo">
                <div class="header__pane ml-auto">
                    <div>
                        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="app-header__mobile-menu">
                <div>
                    <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="app-header__menu">
                <span>
                    <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                        <span class="btn-icon-wrapper">
                            <i class="fa fa-ellipsis-v fa-w-6"></i>
                        </span>
                    </button>
                </span>
            </div>    
            <div class="app-header__content">
                <div class="app-header-left">
                  <div class="app-header__logo">
                        <div class="logo-src"></div>
                    </div>       
                 </div>
                <div class="app-header-right">
                    <div class="search-wrapper">
                        <div class="input-holder">
                            <input type="text" class="search-input" placeholder="Type to search">
                            <button class="search-icon"><span></span></button>
                        </div>
                        <button class="close"></button>
                    </div>
                    <ul class="header-menu nav">
                        <li class="nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-database"> </i>
                                Messages
                            </a>
                        </li>
                        <li class="btn-group nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-edit"></i>
                                Market Place
                            </a>
                        </li>
                        <li class="dropdown nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-cog"></i>
                                Notification
                            </a>
                        </li>
                    </ul>  
                    <div class="header-btn-lg pr-0">
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-left  ml-3 header-user-info">
                                    <div class="widget-heading">
                                        Me
                                    </div>
                                </div>
                                <div class="widget-content-right header-user-info ml-3">
                                    <button type="button" class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                        <i class="fa text-white fa-arrow-down pr-1 pl-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>     
                 </div>
            </div>
        </div>    

           <div class="app-main">
                <div class="app-sidebar sidebar-shadow">
                    <div class="app-header__logo">
                        <div class="logo-src"></div>
                        <div class="header__pane ml-auto">
                            <div>
                                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="app-header__mobile-menu">
                        <div>
                            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="app-header__menu">
                        <span>
                            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span class="btn-icon-wrapper">
                                    <i class="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                            </button>
                        </span>
                    </div>   
                    
                    <div class="scrollbar-sidebar my-5">
                        <div class="app-sidebar__inner navback">
                            <ul class="vertical-nav-menu my-3 navv">
                                <li>
                                    <a href="index.html" class="mm-active">
                                        <i class="fa fa-fw metismenu-icon" aria-hidden="true" title="Copy to use ban"></i>
                                        Dashboard
                                    </a>
                                </li>
                                <li >
                                    <a href="" class="navvv">

                                        <i class="metismenu-icon pe-7s-diamond"></i>
                                        Operations
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="navvv">
                                        <i class="metismenu-icon pe-7s-car"></i>
                                        Records
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                </li>
                                <li >
                                    <a href="tables-regular.html" class="navvv">
                                        <i class="metismenu-icon pe-7s-display2"></i>
                                        Supply Store
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-boxes.html" class="navvv">
                                        <i class="metismenu-icon pe-7s-display2"></i>
                                        Market Place
                                    </a>
                                </li>
                                <li>
                                    <a href="forms-controls.html" class="navvv">
                                        <i class="metismenu-icon pe-7s-mouse">
                                        </i>Forums
                                    </a>
                                </li>
                                <li>
                                    <a href="forms-layouts.html" class="navvv">
                                        <i class="metismenu-icon pe-7s-eyedropper">
                                        </i>Forms Layouts
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>   
               </div>

                   <router-view></router-view>
    </div>
</template>

<script>
/* eslint-disable */
import main from '../assets/main.js'
export default {
    
}
</script>

<style>
    .navv{
        text-align: left;
        padding: 10px;
        color: white;
    }
    .navback{
        background-color: deepskyblue;
        color: white;
    }
    .app-theme-white .app-sidebar {
    background-color: blue;
}
.navvv{
    color: white;
}
</style>