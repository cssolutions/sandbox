<nav class="col-xs-12 text-right" aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item">
            <a class="page-link" href="?pager={!! $paginator->currentPage()-1 !!}{{$search}}" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
        </li>
        @if ($paginator->currentPage() > 1 )
            <li class="page-item"><a class="page-link" href="?pager=1{{$search}}">1</a></li>
        @endif
        @if ($paginator->currentPage() >= 5 )
            <li class="page-item"><span>...</span></li>
        @endif
        @if ($paginator->currentPage() > 2  && $paginator->currentPage()-2 !== 1)
            <li class="page-item"><a class="page-link" href="?pager={!! $paginator->currentPage()-2 !!}{{$search}}">{!! $paginator->currentPage()-2 !!}</a></li>
        @endif
        @if ($paginator->currentPage() > 1  && $paginator->currentPage()-1 !== 1 )
            <li class="page-item"><a class="page-link" href="?pager={!! $paginator->currentPage()-1 !!}{{$search}}">{!! $paginator->currentPage()-1 !!}</a></li>
        @endif

        <li class="page-item active"><a class="page-link" href="?pager={!! $paginator->currentPage() !!}{{$search}}">{!! $paginator->currentPage() !!}</a></li>

        @if ($paginator->currentPage()+1 < $paginator->lastPage())
            <li class="page-item"><a class="page-link" href="?pager={!! $paginator->currentPage()+1 !!}{{$search}}">{!! $paginator->currentPage()+1 !!}</a></li>
        @endif
        @if ($paginator->currentPage()+2 < $paginator->lastPage())
            <li class="page-item"><a class="page-link" href="?pager={!! $paginator->currentPage()+2 !!}{{$search}}">{!! $paginator->currentPage()+2 !!}</a></li>
        @endif
        @if ($paginator->currentPage() <= ($paginator->lastPage()-4) )
            <li class="page-item"><span>...</span></li>
        @endif
        @if ($paginator->currentPage() < $paginator->lastPage())
            <li class="page-item"><a class="page-link" href="?pager={!! $paginator->lastPage() !!}{{$search}}">{!! $paginator->lastPage() !!}</a></li>
        @endif
        <li class="page-item">
            <a class="page-link" href="?pager={!! $paginator->currentPage()+1 !!}{{$search}}" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
        </li>
    </ul>
</nav>