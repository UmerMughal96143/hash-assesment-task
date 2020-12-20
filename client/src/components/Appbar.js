import React from 'react'

const Appbar = () => {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" id="main-nav">
        <div class="container">
            <a href="index.html" class="navbar-brand">TODO LIST</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav" style={{marginLeft : 'auto'}}>
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Explore</a>
                    </li>
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Create</a>
                    </li>
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Share</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Appbar
