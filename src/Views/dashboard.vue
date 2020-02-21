<template>
    <div class="app-main"> 
                 <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-car icon-gradient bg-mean-fruit">
                                        </i>
                                    </div>
                                    <div>Production House</div>
                                </div>
                                <div class="page-title-actions">
                                    <button type="button" data-toggle="tooltip" title="Search" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark search-icon">
                                        <i class="fa fa-search"></i>
                                    </button>
                                    <!-- <div class="">
                                        <div class="input-holder d-inline">
                                            <input type="text" class="" placeholder="Type to search">
                                            <button class="search-icon"><span></span></button>
                                        </div>
                                        <button class="close"></button>
                                    </div> -->
                                    <div class="d-inline-block dropdown">
                                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn-shadow dropdown-toggle btn btn-info">
                                            <span class="btn-icon-wrapper pr-2 opacity-7">
                                                <i class="fa fa-business-time fa-w-20"></i>
                                            </span>
                                            Categories
                                        </button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                            <ul class="nav flex-column">
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">
                                                        <i class="nav-link-icon lnr-inbox"></i>
                                                        <span>
                                                            1
                                                        </span>
                                                        <div class="ml-auto badge badge-pill badge-secondary">86</div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">
                                                        <i class="nav-link-icon lnr-book"></i>
                                                        <span>
                                                            2
                                                        </span>
                                                        <div class="ml-auto badge badge-pill badge-danger">5</div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">
                                                        <i class="nav-link-icon lnr-picture"></i>
                                                        <span>
                                                            3
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>  
                             </div>
                        </div>           
                        
                        <div class="tab-content">
                            <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3 card">
                                            <div class="card-header-tab card-header text-center">
                                                <div class="card-header-title">
                                                   <button class="mb-2 mr-2 btn-transition btn btn-outline-secondary">Print Worksheet</button>
                                                    <button class="mb-2 mr-2 btn btn-primary mx-3">Mark as Completed</button>
                                                    <button class="mb-2 mr-2 btn btn-secondary mx-3">Save</button>
                                                </div>

                                                <ul class="nav">
                                                    <li class="nav-item"><a data-toggle="tab" href="#tab-eg5-0" class="active nav-link">All Productions</a></li>
                                                    <li class="nav-item"><a data-toggle="tab" href="#tab-eg5-1" class="nav-link">Awaiting Productions</a></li>
                                                    <li class="nav-item"><a data-toggle="tab" href="#tab-eg5-2" class="nav-link">Completed</a></li>
                                                </ul>
                                               
                                            </div>
                                            <div class="card-body">
                                                <div class="tab-content">
                                                                <table class="mb-0 table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Order #</th>
                                                                            <th>Item #</th>
                                                                            <th>Details</th>
                                                                            <th>Colors</th>
                                                                            <th>Qty</th>
                                                                            <th>Print type</th>
                                                                            <th>Delivery Method</th>
                                                                            <th>Delivery Time</th>
                                                                            <th>Production Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">#222784934QWD</th>
                                                                            <td>#222784934QWD</td>
                                                                            <td>No minimum more than 4 thing alv oi cewoi<br>No minimum more than 4 thing alv oi cewoi</td>
                                                                            <td><button class="mb-2 mr-2 btn btn-info mx-3">Save</button></td>
                                                                            <td> L * 4</td>
                                                                            <td>DTG Prints</td>
                                                                            <td>Rush Shipping</td>
                                                                            <td>23-June-2020 <br> Time Left: 10:00:00</td>
                                                                            <td>Running <br> 2 of 5</td>
                                                                            
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">#222784934SDC</th>
                                                                            <td>#222784934QWD</td>
                                                                            <td>No minimum more than 4 thing alv oi cewoi<br>No minimum more than 4 thing alv oi cewoi</td>
                                                                            <td><button class="mb-2 mr-2 btn btn-info mx-3">Save</button></td>
                                                                            <td> L * 4</td>
                                                                            <td>DTG Prints</td>
                                                                            <td>Rush Shipping</td>
                                                                            <td>23-June-2020 <br> Time Left: 10:00:00</td>
                                                                            <td>Running <br> 2 of 5</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>   
                 </div>
        </div>

</template>

<script>

export default {
    
}
</script>