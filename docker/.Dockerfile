FROM texlive/texlive:latest

RUN apt-get update && apt-get install -y \
    latexmk \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace