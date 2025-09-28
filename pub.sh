#!/bin/bash

# 设置错误时退出
set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查并加载 nvm
load_nvm() {
    if [ -s "$HOME/.nvm/nvm.sh" ]; then
        log_info "加载 nvm..."
        source "$HOME/.nvm/nvm.sh"
    elif [ -s "/usr/local/opt/nvm/nvm.sh" ]; then
        log_info "从 Homebrew 加载 nvm..."
        source "/usr/local/opt/nvm/nvm.sh"
    else
        log_error "未找到 nvm，请确保 nvm 已正确安装"
        exit 1
    fi
}

# 检查 Node.js 版本
check_node_version() {
    local required_version="22"
    local current_version=$(node -v | sed 's/v//')
    
    log_info "当前 Node.js 版本: v$current_version"
    
    if [[ "$current_version" == "$required_version"* ]]; then
        log_info "Node.js 版本符合要求"
    else
        log_warn "Node.js 版本可能不匹配，建议使用 v$required_version"
    fi
}

# 主函数
main() {
    log_info "开始部署流程..."
    
    # 加载 nvm
    load_nvm
    
    # 切换到 Node.js 22
    log_info "切换到 Node.js 22..."
    nvm use 22
    
    # 检查版本
    check_node_version
    
    # 安装依赖（如果需要）
    if [ ! -d "node_modules" ]; then
        log_info "安装项目依赖..."
        npm install
    fi
    
    # 构建项目
    log_info "构建项目..."
    npm run build
    
    # 检查构建结果
    if [ -d "dist" ]; then
        log_info "构建成功，准备上传..."
        
        # 上传到服务器
        log_info "上传文件到服务器..."
        scp -r dist/* hy-web01:/www/wwwroot/gytvou.sqjydjt.com
        
        log_info "部署完成！"
    else
        log_error "构建失败，dist 目录不存在"
        exit 1
    fi
}

# 执行主函数
main "$@"