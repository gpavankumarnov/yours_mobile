import { Box, Button, Paper, Stack, Typography } from "@mui/material"

export interface PageErrorFallback {
    label: string
    onClick: () => void
  }

export interface PageErrorProps {
    title: string
    subtitle: string
    fallbackProps?: PageErrorFallback
  }




const PageError = ({ title, subtitle, fallbackProps }: PageErrorProps) => {
 
  return (
    <Box>
      <Paper>
        <Stack>
        <Typography variant='h1'>{title}</Typography>
        <Typography variant='body1'>{subtitle}</Typography>
        {fallbackProps && (
            <Box>
              <Button onClick={fallbackProps.onClick}>{fallbackProps.label}</Button>
            </Box>
          )}
        </Stack>
      </Paper>
    </Box>
  )
}

export default PageError
