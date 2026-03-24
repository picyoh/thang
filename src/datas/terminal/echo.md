---
title: echo
---

### NAME

    echo - display a line of text

### SYNOPSIS

    echo [SHORT-OPTION]... [STRING]...
    echo LONG-OPTION

### DESCRIPTION

    Echo the STRING(s) to standard output.

    -e      enable interpretation of backlash escape
        
    -E      disable interpretation of backlash escape (default)

    --help  display this help and exit

    If **-e** is in effect, the following sequences are recognized:

    \\  backlash

    \b  backspace

    \e  escape

    \n  new line

    \t  horizontal tab
