function Export-DirectoryTree {
    param (
        [Parameter(Mandatory = $true)]
        [string]$Directory,
        [Parameter(Mandatory = $true)]
        [string]$OutputFile
    )

    if (-not (Test-Path -Path $Directory -PathType Container)) {
        throw "El directorio '$Directory' no existe"
    }

    # Remove existing output file if it exists
    if (Test-Path -Path $OutputFile -PathType Leaf) {
        try {
            Remove-Item -Path $OutputFile -Force
        } catch {
            throw "Error al eliminar $($OutputFile): $($_.Exception.Message)"
        }
    }

    # Function to recursively build directory tree
    function RecursivelyBuildTree {
        param (
            [string]$CurrentDirectory,
            [string]$Indent
        )

        # Append current directory to output file
        Add-Content -Path $OutputFile -Value "$Indent$CurrentDirectory"

        # Loop through child items (directories and files)
        Get-ChildItem -Path $CurrentDirectory | ForEach-Object {
            $childItem = $_
            if ($childItem.PSIsContainer -and $childItem.Name -ne "node_modules") {
                # If it's a directory (excluding 'node_modules'), recursively process it
                RecursivelyBuildTree -CurrentDirectory $childItem.FullName -Indent "$Indent|--"
            } elseif (-not $childItem.PSIsContainer) {
                # If it's a file, append its name to the output file
                Add-Content -Path $OutputFile -Value "$Indent|   $($childItem.Name)"
            }
        }
    }

    # Start building the directory tree
    RecursivelyBuildTree -CurrentDirectory $Directory -Indent ""

    Write-Output "Árbol de directorios exportado a $($OutputFile)"
}

# Nombre del archivo de salida del árbol
$outputFile = "salidatree.txt"

# Exportar el árbol de directorios del directorio actual (excluyendo node_modules)
Export-DirectoryTree -Directory "." -OutputFile $outputFile
