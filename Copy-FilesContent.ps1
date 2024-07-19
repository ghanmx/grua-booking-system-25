function Copy-FilesContent {
    param (
        [Parameter(Mandatory = $true)]
        [string]$Directory,
        [Parameter(Mandatory = $true)]
        [string]$OutputFile
    )

    if (-not (Test-Path -Path $Directory -PathType Container)) {
        throw "The directory '$Directory' does not exist"
    }

    if (-not (Test-Path -Path $OutputFile -PathType Leaf)) {
        throw "The output file '$OutputFile' does not exist"
    }

    $segmentCount = 1
    $totalWordCount = 0

    # Loop through files and directories
    Get-ChildItem -Path $Directory -Recurse | ForEach-Object {
        $file = $_.FullName
        if ($file -match "README.md|node_modules|package-lock.json|package.json|dist/assets/index-BIv_I74q.js|dist/assets/index-HupOsEJb.css|dist/favicon.ico") {
            return
        }

        if (-not (Test-Path -Path $file)) {
            throw "The file '$file' does not exist"
        }

        if (Test-Path -Path $file -PathType Container) {
            # Append content of files in the directory
            Copy-FilesContent -Directory $file -OutputFile $OutputFile
        } elseif (Test-Path -Path $file -PathType Leaf) {
            # Get the file extension
            $extension = [System.IO.Path]::GetExtension($file)
            if ($extension -match "\.(ico|jpg|jpeg|png|svg|bmp|gif)$") {
                Write-Output "Skipping image file: $file"
                return
            }

            # Append file content to the output file
            try {
                Add-Content -Path $OutputFile -Value "`n`n// $file"
                $fileContent = Get-Content -Path $file
                Add-Content -Path $OutputFile -Value $fileContent
            } catch {
                Write-Output "Error writing to $($OutputFile): $($_.Exception.Message)"
                return
            }

            # Count words in the file
            $wordCount = ($fileContent | Measure-Object -Word).Words
            $totalWordCount += $wordCount

            # Check if the total word count exceeds a multiple of 27000
            if ($totalWordCount -ge (27000 * $segmentCount)) {
                # Insert 5 line breaks and a separator
                try {
                    Add-Content -Path $OutputFile -Value "`n`n`n`n`n_________________________________________________"
                    $segmentCount++
                } catch {
                    Write-Output "Error writing to $($OutputFile): $($_.Exception.Message)"
                    return
                }
            }
        }
    }
}

# Main script

# Output file name
$outputFile = "output.txt"

# Nuevo nombre del archivo de salida
$newOutputFile = "output_new.txt"

# Limpiar el archivo de salida nuevo si existe
if (Test-Path -Path $newOutputFile) {
    try {
        Remove-Item -Path $newOutputFile -Force
    } catch {
        Write-Output "Error deleting $($newOutputFile): $($_.Exception.Message)"
        return
    }
    New-Item -Path $newOutputFile -ItemType File
} else {
    New-Item -Path $newOutputFile -ItemType File
}

# Llamar a la función con el nuevo nombre del archivo de salida
Copy-FilesContent -Directory "." -OutputFile $newOutputFile

Write-Output "Text files content copied to $($newOutputFile)"
