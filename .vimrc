
set nocompatible
filetype off            " for NeoBundle
set number
set hlsearch
set ignorecase
set incsearch
set smartcase
syntax on
set wildmenu
set backspace=indent,eol,start
set cursorline
set showmatch
set encoding=utf-8
set autoread


if has('vim_starting')
        set rtp+=$HOME/.vim/bundle/neobundle.vim/
endif
call neobundle#begin(expand('~/.vim/bundle'))

NeoBundleFetch 'Shougo/neobundle.vim'


 "----------------------------------------------------------
" NeoBundle 設定
"----------------------------------------------------------
" NeoBundle で管理するプラグインを追加します。
NeoBundle 'Shougo/neocomplcache.git'
NeoBundle 'Shougo/unite.vim.git'
NeoBundle 'Yggdroot/indentLine'
NeoBundle 'scrooloose/syntastic'
NeoBundle 'Townk/vim-autoclose'
NeoBundle 'mattn/emmet-vim'
NeoBundle 'neoclide/coc-css'
NeoBundle 'alvan/vim-closetag'
NeoBundle 'hail2u/vim-css3-syntax'
NeoBundle 'neoclide/coc.nvim', 'release', { 'build': { 'others': 'git checkout release' } }
NeoBundle 'scrooloose/nerdtree'
NeoBundle 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
NeoBundle 'junegunn/fzf.vim'
NeoBundle 'machakann/vim-highlightedyank'
NeoBundle 'dhruvasagar/vim-table-mode'
NeoBundle 'alvan/vim-closetag'


NeoBundleLazy 'tpope/vim-endwise', {
  \ 'autoload' : { 'insert' : 1,}}

NeoBundle 'rcmdnk/vim-markdown'
" vim-markdown {{{
let g:vim_markdown_folding_disabled = 1
" }}}


"----------------------------------------------------------
" Syntasticの設定
"----------------------------------------------------------
" 構文エラー行に「>>」を表示
let g:syntastic_enable_signs = 1
" 他のVimプラグインと競合するのを防ぐ
let g:syntastic_always_populate_loc_list = 1
" 構文エラーリストを非表示
let g:syntastic_auto_loc_list = 0
" ファイルを開いた時に構文エラーチェックを実行する
let g:syntastic_check_on_open = 1
" 「:wq」で終了する時も構文エラーチェックする
let g:syntastic_check_on_wq = 1

" Javascript用. 構文エラーチェックにESLintを使用
let g:syntastic_javascript_checkers=['eslint']
" Javascript以外は構文エラーチェックをしない
let g:syntastic_mode_map = { 'mode': 'passive',
                           \ 'active_filetypes': ['javascript'],
                           \ 'passive_filetypes': [] }


let g:closetag_filenames = '*.html,*.xhtml,*.phtml,*.erb,*.php,*.vue,*.js'

" Emmetのキーバインディングを変更する場合
" let g:user_emmet_leader_key = '<C-E>'

nnoremap <silent><C-e> :NERDTreeToggle<CR>

" fzfからファイルにジャンプできるようにする
let g:fzf_buffers_jump = 1

call neobundle#end()

filetype plugin indent on       " restore filetype

set completeopt=menuone,noinsert

autocmd FileType json syntax match Comment +\/\/.\+$+

let g:table_mode_corner = '|'

let g:closetag_filenames = '*.html,*.vue'


"
"----------------------------------------------------------
" インデント
"----------------------------------------------------------
set autoindent          "改行時に前の行のインデントを計測
set smartindent         "改行時に入力された行の末尾に合わせて次の行のインデントを増減する 
set cindent             "Cプログラムファイルの自動インデントを始める
set smarttab            "新しい行を作った時に高度な自動インデントを行う
set expandtab           "タブ入力を複数の空白に置き換える 

set tabstop=2           "タブを含むファイルを開いた際, タブを何文字の空白に変換するか
set shiftwidth=2        "自動インデントで入る空白数
set softtabstop=0       "キーボードから入るタブの数
set tabstop=4       " The width of a TAB is set to 4.
                    " Still it is a \t. It is just that
                    " Vim will interpret it to be having
                    " a width of 4.

set softtabstop=4   " Sets the number of columns for a TAB


if has("autocmd")
  "ファイルタイプの検索を有効にする
  filetype plugin on
  "ファイルタイプに合わせたインデントを利用
  filetype indent on
  "sw=softtabstop, sts=shiftwidth, ts=tabstop, et=expandtabの略
  autocmd FileType c           setlocal sw=4 sts=4 ts=4 et
  autocmd FileType html        setlocal sw=4 sts=4 ts=4 et
  autocmd FileType ruby        setlocal sw=2 sts=2 ts=2 et
  autocmd FileType js          setlocal sw=4 sts=4 ts=4 et
  autocmd FileType zsh         setlocal sw=4 sts=4 ts=4 et
  autocmd FileType python      setlocal sw=4 sts=4 ts=4 et
  autocmd FileType scala       setlocal sw=4 sts=4 ts=4 et
  autocmd FileType json        setlocal sw=4 sts=4 ts=4 et
  autocmd FileType html        setlocal sw=4 sts=4 ts=4 et
  autocmd FileType css         setlocal sw=4 sts=4 ts=4 et
  autocmd FileType scss        setlocal sw=4 sts=4 ts=4 et
  autocmd FileType sass        setlocal sw=4 sts=4 ts=4 et
  autocmd FileType javascript  setlocal sw=4 sts=4 ts=4 et
endif

"" nnoremap <silent> <F5> :update<Bar>silent !start "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "file://%:p"<CR>
nnoremap <silent> <F5> :update<Bar>silent !start "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "file://%:p"<CR>
nnoremap <silent> <F6> :update<Bar>call OpenBrowser(expand('%:p'))<CR>

function! OpenBrowser (url)
    "let l:url = substitute(a:url, "c/", "C:/", "")
    "echo l:url
    "let l:file = "file://" . l:url
    "echo l:file 
    "!start START chrome %l:file%
    execute 'r !start ' . a:url . ' -dump -dump-width ' . winwidth(0)
endfunction

